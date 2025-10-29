// import { motion, AnimatePresence } from "framer-motion";
// import { FiX } from "react-icons/fi";
// import { useState } from "react";


// const backendUrl = import.meta.env.VITE_BACKEND_URL;


// const ContactForm = ({ isOpen, onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [statusMessage, setStatusMessage] = useState("");
//   const [statusType, setStatusType] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showCheckmark, setShowCheckmark] = useState(false);
  

//   const handleSendEmail = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !message) {
//       setStatusType("error");
//       setStatusMessage("Please fill all fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(`${backendUrl}/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatusType("success");
//         setStatusMessage("");
//         setShowCheckmark(true);
//         setName("");
//         setEmail("");
//         setMessage("");
//         setTimeout(() => {
//           setShowCheckmark(false);
//           onClose();
//         }, 2000);
//       } else {
//         setStatusType("error");
//         setStatusMessage(data.error || "Something went wrong");
//       }
//     } catch (err) {
//       console.error(err);
//       setStatusType("error");
//       setStatusMessage("Failed to send message. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 30 }}
//             transition={{ type: "spring", stiffness: 200, damping: 30, duration: 0.8 }}
//             className="relative w-full max-w-md p-6 bg-gray-600 shadow-xl dark:bg-gray-800 rounded-xl"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h1 className="text-2xl font-bold text-gray-300">GET IN TOUCH</h1>
//               <button onClick={onClose}>
//                 <FiX className="w-5 h-5 font-extrabold text-gray-300" />
//               </button>
//             </div>

//             {/* Checkmark Animation */}
//             {showCheckmark && (
//               <div className="flex justify-center mb-4">
//                 <motion.svg
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 500, damping: 20 }}
//                   className="w-12 h-12 text-green-400"
//                   viewBox="0 0 52 52"
//                 >
//                   <motion.circle
//                     cx="26"
//                     cy="26"
//                     r="25"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   />
//                   <motion.path
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M14 27 l7 7 l17 -17"
//                     initial={{ pathLength: 0 }}
//                     animate={{ pathLength: 1 }}
//                     transition={{ duration: 0.8, ease: "easeInOut" }}
//                   />
//                 </motion.svg>
//               </div>
//             )}

//             {!showCheckmark && (
//               <form className="space-y-4" onSubmit={handleSendEmail}>
//                 <div>
//                   <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Your Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Your Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">Message</label>
//                   <textarea
//                     rows="5"
//                     id="message"
//                     placeholder="How can I help you?"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
//                   />
//                 </div>

//                 {statusMessage && (
//                   <p className={`text-sm font-medium ${statusType === "success" ? "text-green-400" : "text-red-400"}`}>
//                     {statusMessage}
//                   </p>
//                 )}

//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileTap={{ scale: 0.97 }}
//                   whileHover={{ scale: 1.03 }}
//                   className={`w-full px-4 py-2 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-red-800 to-red-400 hover:from-red-700 hover:to-red-700 hover:shadow-lg hover:shadow-red-600/50 ${
//                     loading ? "opacity-70 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {loading ? "Sending..." : "Send Message"}
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ContactForm;




import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";

// ✅ Backend URL from frontend .env
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ContactForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  // 📨 Function to send contact message to backend
  const handleSendEmail = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setStatusType("error");
      setStatusMessage("⚠️ Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Email sent successfully
        setStatusType("success");
        setStatusMessage("Message sent successfully!");
        setShowCheckmark(true);

        // Reset form
        setName("");
        setEmail("");
        setMessage("");

        // Close popup after a short delay
        setTimeout(() => {
          setShowCheckmark(false);
          onClose();
        }, 2000);
      } else {
        // ❌ Error from backend
        setStatusType("error");
        setStatusMessage(data.error || "Something went wrong. Try again!");
      }
    } catch (err) {
      console.error(err);
      setStatusType("error");
      setStatusMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", stiffness: 200, damping: 30, duration: 0.8 }}
            className="relative w-full max-w-md p-6 bg-gray-600 shadow-xl dark:bg-gray-800 rounded-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-300">GET IN TOUCH</h1>
              <button onClick={onClose}>
                <FiX className="w-5 h-5 font-extrabold text-gray-300" />
              </button>
            </div>

            {/* ✅ Success Checkmark Animation */}
            {showCheckmark && (
              <div className="flex justify-center mb-4">
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="w-12 h-12 text-green-400"
                  viewBox="0 0 52 52"
                >
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <motion.path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27 l7 7 l17 -17"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.svg>
              </div>
            )}

            {/* Form Fields */}
            {!showCheckmark && (
              <form className="space-y-4" onSubmit={handleSendEmail}>
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    id="message"
                    placeholder="How can I help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>

                {/* Status message */}
                {statusMessage && (
                  <p
                    className={`text-sm font-medium ${
                      statusType === "success" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.03 }}
                  className={`w-full px-4 py-2 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-red-800 to-red-400 hover:from-red-700 hover:to-red-700 hover:shadow-lg hover:shadow-red-600/50 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;

