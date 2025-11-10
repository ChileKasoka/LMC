import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Star, Send } from "lucide-react";

interface Review {
  id: number;
  reviewer: string;
  target: string; // maid or company name
  rating: number;
  comment: string;
  time: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewer, setReviewer] = useState("");
  const [target, setTarget] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // Fetch reviews from backend (mock data for now)
    const mock: Review[] = [
      {
        id: 1,
        reviewer: "John Banda",
        target: "CleanPro Maids Ltd.",
        rating: 5,
        comment: "Excellent service! The maid was professional and on time.",
        time: "2 days ago",
      },
      {
        id: 2,
        reviewer: "Mary Zulu",
        target: "Mary Banda (Maid)",
        rating: 4,
        comment: "She did a great job, just missed a few spots in the kitchen.",
        time: "1 week ago",
      },
    ];
    setReviews(mock);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reviewer || !target || rating === 0 || !comment.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      reviewer,
      target,
      rating,
      comment: comment.trim(),
      time: "Just now",
    };

    setReviews([newReview, ...reviews]);
    setReviewer("");
    setTarget("");
    setRating(0);
    setComment("");
  };

  return (
    <div className="reviews-page">
      <style>{`
        .reviews-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: #f4f6f8;
          font-family: Arial, sans-serif;
          color: #1e293b;
          padding: 1rem;
        }
        h2 {
          text-align: center;
          color: #0b1a28;
          margin-bottom: 1rem;
        }
        .review-form {
          background: #fff;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }
        .review-form input,
        .review-form textarea {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.6rem;
          margin-top: 0.5rem;
          font-size: 0.95rem;
        }
        .review-form label {
          font-weight: 600;
          color: #334155;
          display: block;
          margin-top: 0.75rem;
        }
        .stars {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }
        .star {
          cursor: pointer;
          color: #ccc;
          transition: color 0.2s ease;
        }
        .star.filled {
          color: #fbbf24;
        }
        .review-form button {
          background: #0b1a28;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.6rem 1.2rem;
          margin-top: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .review-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .review-card {
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .reviewer-name {
          font-weight: 600;
          color: #0b1a28;
        }
        .review-target {
          font-size: 0.9rem;
          color: #475569;
        }
        .review-stars {
          color: #fbbf24;
        }
        .review-comment {
          font-size: 0.95rem;
          margin-top: 0.4rem;
        }
        .review-time {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.5rem;
          text-align: right;
        }
        @media (min-width: 768px) {
          .review-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <h2>Client Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          value={reviewer}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setReviewer(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Reviewing (Maid or Company)</label>
        <input
          value={target}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTarget(e.target.value)}
          placeholder="Who are you reviewing?"
        />

        <label>Rating</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className={`star ${rating >= star ? "filled" : ""}`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <label>Comment</label>
        <textarea
          rows={3}
          value={comment}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
          placeholder="Share your experience..."
        />

        <button type="submit">
          <Send size={16} /> Submit Review
        </button>
      </form>

      <div className="review-list">
        {reviews.map((rev) => (
          <div className="review-card" key={rev.id}>
            <div className="review-header">
              <div>
                <div className="reviewer-name">{rev.reviewer}</div>
                <div className="review-target">Reviewed: {rev.target}</div>
              </div>
              <div className="review-stars">
                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>
            </div>
            <div className="review-comment">{rev.comment}</div>
            <div className="review-time">{rev.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
