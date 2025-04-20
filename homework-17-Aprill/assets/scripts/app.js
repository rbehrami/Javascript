import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";


document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#tabledata");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageInfo = document.getElementById("page-info");
  
    let currentPage = 1;
    const rowsPerPage = 10;
  
    let users = [];
  
    // Load valid user data from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const user = JSON.parse(localStorage.getItem(key));
        if (user.name && user.email && user.password) {
          users.push({ ...user, key });
        }
      } catch (err) {
        console.warn(`Skipping invalid localStorage item at key: ${key}`, err);
      }
    }
  
    const totalPages = Math.ceil(users.length / rowsPerPage);
  
    function renderTable(page) {
        tableBody.innerHTML = "";
      
        const totalPages = Math.ceil(users.length / rowsPerPage); // moved inside here
      
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageUsers = users.slice(start, end);
      
        for (let index = 0; index < pageUsers.length; index++) {
          const user = pageUsers[index];
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.department || ""}</td>
            <td>${user.teacher || ""}</td>
            <td>
              <button class="btn btn-sm btn-warning me-2 edit-btn">Edit</button>
              <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </td>
          `;
          tableBody.appendChild(row);
      
          // Delete
          row.querySelector(".delete-btn").addEventListener("click", function () {
            if (confirm(`Delete user: ${user.email}?`)) {
              localStorage.removeItem(user.key);
              users = users.filter(u => u.key !== user.key);
              const updatedTotalPages = Math.ceil(users.length / rowsPerPage);
              if (currentPage > updatedTotalPages) currentPage = updatedTotalPages || 1;
              renderTable(currentPage);
            }
          });
      
        // Edit
        // Elements for modal
        const editModal = new bootstrap.Modal(document.getElementById("editUserModal"));
        const editForm = document.getElementById("editUserForm");
        const editName = document.getElementById("editName");
        const editEmail = document.getElementById("editEmail");
        const editDepartment = document.getElementById("editDepartment");
        const editTeacher = document.getElementById("editTeacher");
        const editKey = document.getElementById("editKey");

        // Attach event inside renderTable:
        row.querySelector(".edit-btn").addEventListener("click", function () {
          editName.value = user.name;
          editEmail.value = user.email;
          editDepartment.value = user.department;
          editTeacher.value = user.teacher;
          editKey.value = user.key;
          editModal.show();
        });
        }
      
        pageInfo.textContent = `Page ${page} of ${totalPages}`;
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages || totalPages === 0;
      }   
      
    // Pagination controls
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
      }
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderTable(currentPage);
      }
    });
  
    renderTable(currentPage); // Initial render
    // Save edits from the modal
const editForm = document.getElementById("editUserForm");
const editModal = new bootstrap.Modal(document.getElementById("editUserModal"));

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const key = document.getElementById("editKey").value;
  const newName = document.getElementById("editName").value.trim();
  const newEmail = document.getElementById("editEmail").value.trim();
  const newDepartment = document.getElementById("editDepartment").value.trim();
  const newTeacher = document.getElementById("editTeacher").value.trim();

  if (newName && newEmail) {
    const oldUser = users.find(u => u.key === key);
    const updatedUser = {
      ...oldUser,
      name: newName,
      email: newEmail,
      department: newDepartment,
      teacher: newTeacher
    };

    // Save to localStorage with new email as key (if changed)
    localStorage.setItem(newEmail, JSON.stringify(updatedUser));
    if (newEmail !== key) {
      localStorage.removeItem(key);
    }

    // Update users array
    users = users.map(u => u.key === key ? { ...updatedUser, key: newEmail } : u);

    editModal.hide();
    renderTable(currentPage);
   // alert("User updated.");
    window.location.href = "dashboard.html";
  }
});

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const userData = localStorage.getItem(key);

  if (userData) {
    const user = JSON.parse(userData);
    document.getElementById("username").textContent = user.name;
  } else {
    // If no user is logged in, redirect to login
    window.location.href = "login.html";
  }
  logoutBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(localStorage.getItem("loggedInUser"));

  // Check if user is authenticated and data exists
  if (userData) {
    // Parse and display user data on the page
    document.getElementById("displayName").textContent = userData.name;

  } else {
    // Redirect to login page if no user data
    window.location.href = "login.html";
  }
});

  });
