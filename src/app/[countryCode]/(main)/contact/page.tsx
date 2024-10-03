const Contact = async () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="col-10">
            <h2 className="mb-14 text-center text-3xl font-semibold">
              Contact
            </h2>
            <p className="flex items-center justify-center">
              Send us your questions. Our team will response as fast as we can
            </p>
            <form
              className="border border-gray-1000 dark:border-gray-700 rounded-md md:p-20 md:m-20 sm:p-10 sm:m-20 lg:m-60 lg:p-30"
              method="POST"
            >
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="John"
                    type="text"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="john.doe@email.com"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enquiry About"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Type your message..."
                  rows={8}
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
