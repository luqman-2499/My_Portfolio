import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      onClose(); // close modal after sending
    } else {
      alert(data.error || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Try again later.");
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
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              duration: 0.8,
            }}
            className="w-full max-w-md p-6 bg-gray-600 shadow-xl dark:bg-gray-800 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-600">
                GET IN TOUCH
              </h1>
              <button onClick={onClose}>
                <FiX className="w-5 h-5 font-extrabold text-gray-300" />
              </button>
            </div>

            {/* INPUT FORM */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-300"
                >
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
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-300"
                >
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
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  rows="5"
                  id="message"
                  placeholder="How can I Help You?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              <motion.button
                type="submit"
                onClick={handleSendEmail}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
                className="w-full px-4 py-2 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-red-800 to-red-400 hover:from-red-700 hover:to-red-700 hover:shadow-lg hover:shadow-red-600/50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;