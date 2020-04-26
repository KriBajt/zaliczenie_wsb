using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NinjaOrganizer.API.Contexts;
using NinjaOrganizer.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace NinjaOrganizer.API.Services
{
    public class NinjaOrganizerRepository : INinjaOrganizerRepository
    {
        private readonly NinjaOrganizerContext _context;

        public NinjaOrganizerRepository(NinjaOrganizerContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public IEnumerable<Taskboard> GetTaskboards()
        {
            return _context.Taskboards.OrderBy(c => c.Title).ToList();
        }

        public Taskboard GetTaskboard(int taskboardId, bool includeCards)
        {
            if (includeCards)
            {
                return _context.Taskboards.Include(c => c.Cards)
                    .Where(c => c.Id == taskboardId).FirstOrDefault();
            }

            return _context.Taskboards
                    .Where(c => c.Id == taskboardId).FirstOrDefault();
        }

        public Card GetCardForTaskboard(int taskboardId, int cardId)
        {
            return _context.Cards
               .Where(p => p.TaskboardId == taskboardId && p.Id == cardId).FirstOrDefault();
        }

        public IEnumerable<Card> GetCardsForTaskboard(int taskboardId)
        {
            return _context.Cards
                          .Where(p => p.TaskboardId == taskboardId).ToList();
        }

        public bool TaskboardExists(int taskboardId)
        {
            return _context.Taskboards.Any(c => c.Id == taskboardId);
        }

        public void AddCardForTaskboard(int taskboardId, Card card)
        {
            var taskboard = GetTaskboard(taskboardId, false);
            taskboard.Cards.Add(card);
        }

        public void UpdateCardForTaskboard(int taskboardId, Card card)
        {

        }

        public void DeleteCard(Card card)
        {
            _context.Cards.Remove(card);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void AddTaskboard(Taskboard taskboard)
        {
            _context.Taskboards.Add(taskboard);
        }

        public void DeleteTaskboard(Taskboard taskboard)
        {
            _context.Taskboards.Remove(taskboard);
        }
    }
}
