import { Table } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div className="p-6">
                <p className="mb-2 text-2xl text-gray-500 dark:text-gray-400">
                    Difference between SQL and NoSQL
                </p>
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            SQL
                        </Table.HeadCell>
                        <Table.HeadCell>
                            NoSQL
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                SQL databases use a relational data model
                            </Table.Cell>
                            <Table.Cell>
                                NoSQL databases use various non-relational data models.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                SQL databases have a fixed schema that defines the structure of the data
                            </Table.Cell>
                            <Table.Cell>
                                NoSQL databases have a flexible schema that allows for changes to the data structure without requiring a pre-defined schema.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                SQL databases provide strong consistency.
                            </Table.Cell>
                            <Table.Cell>
                                NoSQL databases offer eventual consistency, which means that data changes may take some time to propagate across all nodes.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                NoSQL databases are designed for scalability and can handle large volumes of data and traffic across multiple nodes.
                            </Table.Cell>
                            <Table.Cell>
                                SQL databases may face scaling challenges.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                SQL databases use SQL as the query language.
                            </Table.Cell>
                            <Table.Cell>
                                NoSQL databases may use their own query languages or APIs
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div className="p-6">

                <p className="mb-2 text-2xl text-gray-500 dark:text-gray-400">
                    Difference between javascript and NodeJS
                </p>
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            JavaScript
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Node.js
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                JavaScript is executed in the browser.
                            </Table.Cell>
                            <Table.Cell>
                                Node.js is executed on the server-side.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                JavaScript has a limited set of built-in modules that allow it to interact with the browser and the DOM.
                            </Table.Cell>
                            <Table.Cell>
                                Node.js provides a rich set of built-in modules and libraries for server-side tasks.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                JavaScript is single-threaded and cannot handle concurrent requests efficiently.
                            </Table.Cell>
                            <Table.Cell>
                                Node.js has a non-blocking I/O model that enables it to handle a large number of concurrent requests.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                JavaScript is mainly used for DOM manipulation and client-side validation.
                            </Table.Cell>
                            <Table.Cell>
                                Node.js is used for server-side tasks such as data processing and database operations
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
            <div className="p-6">
                <p className="mb-2 text-2xl text-gray-500 dark:text-gray-400">
                    What is JWT, and how does it work?
                </p>
                <p className="mb-2  text-gray-500 dark:text-gray-400">
                    JWT workflow<br />
                    Users have only indirect contact with the token, for example, when they enter usernames and passwords. The actual communication takes place between the client and the server.

                    Before using JWT, you must define a secret key. As soon as a user has successfully entered their login information, the JWT will be returned with the key and saved locally. This transfer should take place over HTTPS to ensure that the data is protected. These steps are described as follows:

                    The user logs in to the client using a username and password.

                    The server checks if the hashed password is the same as the hashed password stored in the database for this user.

                    If the hashed passwords are the same, the JWT service in the server stores the data in the JWT payload section and signs it.

                    The server sends the signed JWT to the client, and the client saves it locally.

                    The next time the user sends a request for data, the client sends the token to the server in the authorization header of the HTTP request using the Bearer scheme.
                </p>

            </div>
            <div className='p-6'>
                <p className="mb-2 text-2xl text-gray-500 dark:text-gray-400">Here's how Node.js handles multiple requests at the same time</p>
                <p>Incoming requests are first queued by the event loop.

                    When a request is ready to be processed, Node.js assigns a new event handler to it, and the event handler is added to the event queue.

                    As soon as the event handler is added to the queue, Node.js moves on to the next request and assigns a new event handler to it, and so on.

                    When an event handler is picked up from the queue, it is executed, and its callback function is invoked.

                    The callback function performs the required I/O operations and, when finished, signals to the event loop that it has completed.

                    The event loop then picks up the next event in the queue and starts the process again.

                    This non-blocking I/O model enables Node.js to handle a large number of concurrent requests efficiently, without blocking the execution of other requests. As a result, Node.js can handle high traffic web applications and real-time applications such as chat applications, online gaming, and streaming services.</p>
            </div>
        </div >
    );
};

export default Blogs;