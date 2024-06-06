import Title from "../../Shared/Title";

const Notice = () => {
    return (
        <div className="my-20">
            <Title title="Notice Board" subtitle="Notice of The Company"></Title>
            <ul className="p-4 lg:p-8 bg-[#240750] text-gray-100">
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">New Employee Onboarding Session</h3>
                            <time dateTime="2024-06-01" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">June 1, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">Join us for a comprehensive onboarding session for all new employees. Learn about company policies, asset management procedures, and meet your team members.</p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Quarterly Performance Reviews</h3>
                            <time dateTime="2024-07-15" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">July 15, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">Our quarterly performance reviews will be held next month. Please prepare your self-evaluations and goals for the upcoming quarter.</p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Company-Wide Town Hall Meeting</h3>
                            <time dateTime="2024-08-10" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">August 10, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">Join our CEO and executive team for a company-wide town hall meeting. Discuss our achievements, future plans, and have your questions answered.</p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Annual Company Picnic</h3>
                            <time dateTime="2024-09-05" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-400">September 5, 2024</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-300">Save the date for our annual company picnic! Enjoy a day of fun, food, and games with your colleagues and their families at the local park.</p>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
    );
};

export default Notice;
