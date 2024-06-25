document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
  
    sidebar.innerHTML = `
      <div class="sidebar">
        <ul>
          <li><a href="/catalog">Home</a></li>
          <li><a href="/catalog/books">All books</a></li>
          <li><a href="/catalog/authors">All authors</a></li>
          <li><a href="/catalog/genres">All genres</a></li>
          <li><a href="/catalog/bookinstances">All book-instances</a></li>
          <li><a href="/catalog/author/create">Create new author</a></li>
          <li><a href="/catalog/genre/create">Create new genre</a></li>
          <li><a href="/catalog/bookinstance/create">Create new book instance (copy)</a></li>
        </ul>
      </div>
    `;
  
    document.body.insertBefore(sidebar, document.body.firstChild);
  });
  