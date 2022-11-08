import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-slate-600 dark:bg-gray-800'>
            <section className="dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-white mt-16">Questions Answered</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">Questions About Satu Dental</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 grid-cols-1 lg:px-12 xl:px-32 mb-16">
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">What is cors in react?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">In ReactJS, Cross-Origin Resource Sharing (CORS) refers back to the technique that lets in you to make requests to the server deployed at a exclusive domain. As a reference, if the frontend and backend are at  exclusive domains, we want CORS there.</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">How does the Private route work?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">Private Routes in React Router (additionally referred to as Protected Routes) require a person being legal to go to a route (read: page). So if a person isn't legal for a particular page, they can not get admission to it. The maximum not unusualplace instance is authentication in a React software wherein a person can simplest get admission to the covered pages whilst they may be legal (this means that in this example being authenticated). Authorization is going past authentication though. For instance, a person also can have roles and permissions which provide a person get admission to to precise regions of the software.</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">What is the node? how does node node work?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">JavaScript is one of the maximum famous programming languages withinside the world. It powers hundreds of thousands of web sites today, and it has attracted droves of builders and architects to construct functions for the web. If you`re new to programming, JavaScript is without problems one of the first-class programming languages to get below your belt.

                                For its first 20 years, JavaScript become used specifically for client-aspect scripting. Since JavaScript might be used best inside the  tag, builders needed to paintings in more than one languages and frameworks among the front-cease and back-cease components. Later got here Node.js, that is a run-time surroundings that consists of the whole thing required to execute a application written in JavaScript.</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">What Is Google Firebase and Why Should You Use It?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">Google Firebase is an utility improvement platform that permits builders to create iOS, Android, and Web apps. Here's why you have to use it!

                                Google Firebase gives many functions that pitch it because the go-to backend improvement device for internet and cell apps. It reduces improvement workload and time. And it is an ideal prototyping device. Firebase is simple, lightweight, friendly, and industrially recognized.

                                Tired of writing dull code on your backend, or cannot even write it at all? Try Google Firebase. So what is Google Firebase, and why have to you construct your app round it?</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;