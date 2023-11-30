using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Storage.API.Data;
using Storage.API.DTO;
using Storage.API.Entities;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace Storage.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _context;
        public ItemsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("list")]
        public ActionResult<IEnumerable<Item>> GetItems()
        {
            var items = _context.Items.ToList();

            return items;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetResult(int id)
        {
            return await _context.Items.FindAsync(id);
        }

        [HttpPost]
        public ActionResult<Item> AddItem(ItemDto itemDto)
        {

            var item = new Item
            {
                Name = itemDto.Name,
                Type = itemDto.Type,
                Value = itemDto.Value,
                Amount = itemDto.Amount
            };
            _context.Items.Add(item);
            _context.SaveChanges();
            return item;
        }


        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<Item>> DeleteItem(int id)
        {
            _context.Items.Remove(_context.Items.Find(id));
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("getlargestid")]
        public ActionResult GetResult()
        {
            try
            {
                var maxId = _context.Items.ToList().Max(a => a.Id).ToString();
                return Ok(maxId);
            }
            catch(Exception e)
            {
                return Ok(e);
            }
        }
    }
}
