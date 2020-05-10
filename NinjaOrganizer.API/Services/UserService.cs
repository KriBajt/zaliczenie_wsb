using NinjaOrganizer.API.Contexts;
using NinjaOrganizer.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Services
{
    public class UserService : IUserService
    {
        private readonly NinjaOrganizerContext _context;

        public UserService(NinjaOrganizerContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users.SingleOrDefault(x => x.Username == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (!checkPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // authentication successful
            return user;
        }

        private bool checkPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            // TODO sprawdzic password

            if (storedHash.Length != 64 || storedSalt.Length != 128)
                throw new ArgumentException("invalid lenght", "checkpassword");

            using (var hmac = new HMACSHA512(storedSalt))
            {
                var resultHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

                for (int i = 0; i < resultHash.Length; i++)
                    if (resultHash[i] != storedHash[i]) return false;
            }
            return true;
        }

        private byte[] createPasswordHash(string password, out byte[] passwordSalt)
        {
            // TODO sprawdzic czy haslo jest puste


            var hash = new byte[64];

            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }

            return hash;
        }

        public User Create(User user, string password)
        {
            // TODO sprawdzic czy jest wpisane haslo i czy uzytkownik juz istnieje

            byte[] passwordHash, passwordSalt;
            passwordHash = createPasswordHash(password, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _context.Users.Add(user);
            try
            {
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
                string ee = ex.Message;
            }

            return user;
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
            }
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public void Update(User userParam, string password = null)
        {
            var user = _context.Users.Find(userParam.Id);

            if (user == null)
                throw new Exception("User not found");

            // update username if it has changed
            if (!string.IsNullOrWhiteSpace(userParam.Username) && userParam.Username != user.Username)
            {
                // throw error if the new username is already taken
                if (_context.Users.Any(x => x.Username == userParam.Username))
                    throw new Exception("Username " + userParam.Username + " is already taken");

                user.Username = userParam.Username;
            }

            // update user properties if provided
            if (!string.IsNullOrWhiteSpace(userParam.FirstName))
                user.FirstName = userParam.FirstName;

            if (!string.IsNullOrWhiteSpace(userParam.LastName))
                user.LastName = userParam.LastName;

            // update password if provided
            if (!string.IsNullOrWhiteSpace(password))
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(password, out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
            }

            _context.Users.Update(user);
            _context.SaveChanges();
        }

        // private helper methods

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
