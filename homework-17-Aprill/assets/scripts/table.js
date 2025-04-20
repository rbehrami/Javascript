document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#tabledata");
    let userCount = 0;
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const raw = localStorage.getItem(key);
  
      try {
        const user = JSON.parse(raw);
  
        if (user.name && user.email && user.password) {
          userCount++;
  
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${userCount}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.department}</td>
            <td>${user.teacher}</td>
            <td>
              <button class="btn btn-sm btn-warning me-2 edit-btn">Edit</button>
              <button class="btn btn-sm btn-danger delete-btn">Delete</button>
            </td>
          `;
  
          tableBody.appendChild(row);
  
          // DELETE BUTTON
          row.querySelector(".delete-btn").addEventListener("click", function () {
            if (confirm(`Delete user: ${user.email}?`)) {
              localStorage.removeItem(key);
              row.remove();
            }
          });
  
          // EDIT BUTTON
          row.querySelector(".edit-btn").addEventListener("click", function () {
            const newName = prompt("Enter new name:", user.name);
            const newEmail = prompt("Enter new email:", user.email);
  
            if (newName && newEmail) {
              const updatedUser = { ...user, name: newName, email: newEmail };
              localStorage.setItem(newEmail, JSON.stringify(updatedUser));
              if (newEmail !== key) localStorage.removeItem(key);
  
              row.children[1].textContent = newName;
              row.children[2].textContent = newEmail;
              alert("User updated.");
            }
          });
        }
      } catch (err) {
        console.warn(`Skipping invalid localStorage item at key: ${key}`, err);
      }
    }
  
    if (userCount === 0) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="4" class="text-center">No valid user data found in localStorage.</td>`;
      tableBody.appendChild(row);
    }
  });
  