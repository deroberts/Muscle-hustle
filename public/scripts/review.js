const newReviewForm = document.querySelector(".new-review-form");

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("review-name").value;
  const review = document.getElementById("review-desc").value;

  const response = await fetch(`/api/reviews`, {
    method: "POST",
    body: JSON.stringify({
      title,
      review,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

if (newReviewForm) {
  newReviewForm.addEventListener("submit", newFormHandler);
}

// reply comments
// attempting to add a reply comment button to the review comments
const replyCommentSubmit = document.querySelector(".reply-comment-form");

async function replyCommentHandler(event) {
  event.preventDefault();

  const contentEl = document.getElementById("reply-comment").value.trim();

  if (contentEl) {
    const response = await fetch("/api/review/comments", {
      method: "POST",
      body: JSON.stringify({
        user_id,
        review_id,
        reply,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

replyCommentSubmit.addEventListener("submit", replyCommentHandler);
