import { FormEvent } from "react";

interface Props {
  newsLetterEmail: string;
  setNewsLetterEmail: (email: string) => void;
  newsLetterSuccess: string;
  handleSubscribe: (e: FormEvent) => void;
}

export default function Newsletter({
  newsLetterEmail,
  setNewsLetterEmail,
  newsLetterSuccess,
  handleSubscribe
}: Props) {
  return (
    <div id="widget_23905" className="newsletter mb-5">
      <div className="big-title">Newsletter</div>
      {newsLetterSuccess ? (
        <div className="newsletter-description text-emerald-800 bg-emerald-50 p-2.5 rounded border border-emerald-200 mt-3 dark:bg-emerald-950 dark:text-emerald-200">
          {newsLetterSuccess}
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="newsletter-content" style={{ display: 'contents' }} id="registerForm">
          <div className="newsletter-title" style={{ fontFamily: 'Newsreader, serif' }}>Stay ahead with Saudi Gazette</div>
          <div id="FormSubscriberMessage" className="newsletter-description">
            Subscribe to our newsletter to receive daily news insights, breaking stories, and in-depth analysis straight to your inbox!
          </div>
          <div className="newsletter-input">
            <input
              id="newsletterEmail"
              name="ms-email"
              required
              type="email"
              placeholder="Your email address"
              value={newsLetterEmail}
              onChange={(e) => setNewsLetterEmail(e.target.value)}
              className="bg-white text-black dark:bg-zinc-800 dark:text-white"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      )}
    </div>
  );
}
