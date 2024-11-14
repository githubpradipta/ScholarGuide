const Guidelines_component = () => {
    const guidelines = [
      {
        title: "Content Quality",
        description: "Upload only high-quality, relevant notes that provide value to other users. Ensure that your notes are well-organized and free from any offensive or inappropriate content."
      },
      {
        title: "Copyright and Plagiarism",
        description: "Do not upload notes that violate any copyright laws. Ensure that the content is original or properly credited. ScholarGuide strictly prohibits plagiarism."
      },
      {
        title: "Note Review Process",
        description: "All uploaded notes are reviewed by the admin before becoming publicly available. This helps ensure only appropriate and relevant content is shared."
      },
      {
        title: "Inappropriate Content Upload",
        description: "If any user found to be uploading inappropriate content then it leads to deleteing your note as well as blocking users account."
      },
      {
        title: "Privacy and Security",
        description: "Do not share personal or sensitive information in your notes or comments. Keep your account details secure."
      },
      {
        title: "Engagement",
        description: "Engage with valuable content by liking, saving, and sharing it. This helps highlight quality notes for others."
      },
     
    ];
  
    return (
      <div className="w-full my-8 p-6 bg-white shadow-md rounded-lg">
        <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-4">
          {guidelines.map((item, index) => (
            <li key={index} className="border-b-2 py-4 lg:w-[40%]">
              <h2 className="text-xl font-semibold text-slate-700 mb-2">{item.title}</h2>
              <p className="text-slate-500">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Guidelines_component;
  