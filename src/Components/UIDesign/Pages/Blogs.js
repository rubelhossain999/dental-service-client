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
                            <h3 className="font-extrabold text-3xl text-white">Difference between SQL and NoSQL</h3>
                            <p className="mt-1 text-white dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases version information as facts in rows and tables with logical hyperlinks among them). NoSQL is a category of DBMS which can be non-relational and typically do now no longer use SQL. There are 5 realistic variations between SQL and NoSQL:
                                {<br />}
                                * Language * Scalability *Structure * Properties * Support and communities.</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">What is JWT, and how does it work?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">
                                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting records among events as JSON object.
                                {<br />}
                                It is compact, readable and digitally signed the usage of a non-public key/ or a public key pair with the aid of using the Identity Provider(IdP). So the integrity and authenticity of the token may be proven with the aid of using different events involved.
                                {<br />}
                                The cause of the usage of JWT isn't always to cover facts however to make sure the authenticity of the facts. JWT is signed and encoded, now no longer encrypted.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">What is the difference between javascript and Node JS?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">
                                1. NodeJS :
                                NodeJS is a cross-platform and opensource Javascript runtime surroundings that lets in the javascript to be run at the server-side. Nodejs lets in Javascript code to run outdoor the browser. Nodejs comes with quite a few modules and in general utilized in internet development.
                                {<br />}
                                2. Javascript:
                                Javascript is a Scripting language. It is in general abbreviated as JS. It may be stated that Javascript is the up to date model of the ECMA script. Javascript is a high-degree programming language that makes use of the idea of Oops however it's miles primarily based totally on prototype inheritance.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-3xl text-white">How does NodeJS handle multiple requests at the same time?</h3>
                            <p className="mt-1 text-white dark:text-gray-400">
                                NodeJS gets a couple of purchaser requests and locations them into EventQueue. NodeJS is constructed with the idea of occasion-pushed architecture. NodeJS has its very own EventLoop that's an countless loop that gets requests and procedures them. EventLoop is the listener for the EventQueue.
                                {<br />}
                                If NodeJS can technique the request with out I/O blocking off then the occasion loop might itself technique the request and sends the reaction returned to the purchaser through itself. But, it's far feasible to technique a couple of requests parallelly the use of the NodeJS cluster module or worker_threads module.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;