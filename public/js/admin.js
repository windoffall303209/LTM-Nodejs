// Admin panel functionality

// Create auction form submission
const submitButton = document.getElementById("submitCreateAuction");
if (submitButton) {
  submitButton.addEventListener("click", async () => {
    const form = document.getElementById("createAuctionForm");
    const formData = new FormData(form);

    const auctionData = {
      title: formData.get("title"),
      description: formData.get("description"),
      starting_price: parseFloat(formData.get("starting_price")),
      duration: parseInt(formData.get("duration")),
      bid_increment: parseFloat(formData.get("bid_increment")),
    };

    // Validate
    if (
      !auctionData.title ||
      !auctionData.starting_price ||
      !auctionData.duration
    ) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }

    try {
      const response = await fetch("/api/auctions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auctionData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Tạo phiên đấu giá thành công!");
        location.reload();
      } else {
        alert("Lỗi: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi khi tạo phiên đấu giá!");
    }
  });
}

// Load stats periodically
function loadAdminStats() {
  fetch("/api/admin/dashboard")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Update stats if elements exist
        // This is for dynamic updates
      }
    })
    .catch((error) => {
      console.error("Error loading stats:", error);
    });
}

// Refresh stats every 30 seconds
if (window.location.pathname.includes("/admin")) {
  setInterval(loadAdminStats, 30000);
}
