document.addEventListener('DOMContentLoaded', () => 
{
    const seats = document.querySelectorAll('.seat');
    const status = document.getElementById('status');
  
    seats.forEach(seat => {
      seat.addEventListener('click', () => 
      {
        if (seat.classList.contains('reserved')) {
          status.textContent = 'This seat is already reserved.';
        }else {
          seat.classList.add('selected');
          status.textContent = 'Seat selected. Click again to deselect.';
        }
      });
    });
  });
  