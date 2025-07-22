// footer.js

function footerInit() {
  const localCSVPath = "./static/data/latest-posts.csv";

  fetch(localCSVPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to load CSV file");
      return response.text();
    })
    .then(data => {
      const container = document.getElementById("posts-container");
      if (!container) {
        console.error("#posts-container not found.");
        return;
      }

      const rows = data.trim().split("\n");
      const headers = rows.shift().split(",");

      rows.forEach(row => {
        const values = row.split(",");
        const post = {};
        headers.forEach((header, index) => {
          post[header.trim()] = values[index] ? values[index].trim() : "";
        });

        if (!post.image || !post.url) return;

        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
          <img src="./static/images/${post.image}" alt="Post image">
          <div class="post-caption">${post.caption}</div>
          <hr id="post-hr">
          <div class="social-icons">
            <!-- Insert your SVG social icons here -->
          </div>
        `;
        container.appendChild(postDiv);
      });
    })
    .catch(error => {
      console.error("Error loading CSV:", error);
    });
}

// Ensure footerInit runs only after HTML injection completes
if (window.injectPromise) {
  window.injectPromise.then(() => {
    footerInit();
  });
} else {
  // Fallback: run immediately if injectPromise is not set
  footerInit();
}
