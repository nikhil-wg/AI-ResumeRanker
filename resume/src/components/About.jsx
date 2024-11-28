export default function About() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col text-center">
        <div className="max-w-4xl rounded-lg shadow-md p-6">
          <h1 className="text-5xl font-bold p-5">
            AI-Powered Resume Screening System
          </h1>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className=" mb-6">
            This project provides an automated solution to screen resumes for
            Full-Stack Developer roles. Using Natural Language Processing (NLP)
            techniques, including a fine-tuned BERT model, the system evaluates
            how well candidates resumes align with a given job description.
            Additionally, it incorporates information from online profiles
            (e.g., LinkedIn and GitHub links in resumes) to enhance candidate
            evaluation.
          </p>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside  mb-6">
            <li>
              <strong>Fine-Tuned BERT Model:</strong> Uses a state-of-the-art
              NLP model for evaluating job descriptions and resumes.
            </li>
            <li>
              <strong>Online Profile Analysis:</strong> Scrapes LinkedIn and
              GitHub profiles (when provided in resumes) for relevant skills and
              experiences.
            </li>
            <li>
              <strong>Custom Scoring:</strong> Generates a detailed score based
              on skills, experiences, and keywords from job descriptions.
            </li>
            <li>
              <strong>Dynamic Compatibility Check:</strong> Rates resumes based
              on their fit for the provided job description.
            </li>
            <li>
              <strong>Error Handling:</strong> Includes robust mechanisms to
              handle missing or incomplete data.
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4">System Requirements</h2>
          <ul className="list-disc list-inside ">
            <li>Python 3.7+</li>
            <li>Pytorch</li>
            <li>Transformers (Hugging Face)</li>
            <li>BeautifulSoup4</li>
            <li>Requests</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Scikit-learn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
