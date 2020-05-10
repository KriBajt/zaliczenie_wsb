using NinjaOrganizer.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Services
{
    public interface INinjaOrganizerRepository
    {
        IEnumerable<Taskboard> GetTaskboards();

        Taskboard GetTaskboard(int taskboardId, bool includeCards);
        IEnumerable<Taskboard> GetTaskboardsForUser(int userId);

        void AddTaskboard(Taskboard taskboard);
        void DeleteTaskboard(Taskboard taskboard);

        IEnumerable<Card> GetCardsForTaskboard(int taskboardId);

        Card GetCardForTaskboard(int taskboardId, int cardId);

        bool TaskboardExists(int taskboardId);

        void AddCardForTaskboard(int taskboardId, Card card);

        void UpdateCardForTaskboard(int taskboardId, Card card);

        void UpdateTaskboard(int taskboardId, Taskboard taskboard);

        void DeleteCard(Card card);

        bool Save();
    }
}
