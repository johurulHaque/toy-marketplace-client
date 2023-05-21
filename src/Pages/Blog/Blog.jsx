import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="link-a text-center">
        ❓ What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h2>
      <div>
        <p>
          There are many types of token, although in authentication with JWT the
          most typical are access token and refresh token.
        </p>
        <p>
          ✍️<span className="link-a"> Access token:</span> <br />
          It contains all the information the server needs to know if the user
          can access the resource are requesting or not. They are usually
          expired tokens with a short validity period.
        </p>
        <p>
          ✍️<span className="link-a"> Refresh token:</span> <br />
          The refresh token is used to generate a new access token. Typically,
          if the access token has an expiration date, once it expires, the user
          would have to authenticate again to obtain an access token. With
          refresh token, this step can be skipped and with a request to the API
          get a new access token that allows the user to continue accessing the
          application resources.
        </p>
        <p>
          ✍️<span className="link-a"> How access token work:</span> <br />
          Access tokens are used in token-based authentication to allow an
          application to access an API. The application receives an access token
          after a user successfully authenticates and authorizes access, then
          passes the access token as a credential when it calls the target API.
        </p>
        <p>
          ✍️<span className="link-a">How refresh token work:</span> <br />A
          refresh token just helps you re-validate a user without them having to
          re-enter their login credentials multiple times. The access token is
          re-issued, provided the refresh token is a valid one requesting
          permission to access confidential resources.
        </p>
        <p>
          ✍️<span className="link-a"> Store location on the client-side:</span>{" "}
          <br />
          1. local storage <br />
          2. Browser cookie(http only cookie) , it is secure then local storage.
        </p>
      </div>

      <h2 className="link-a text-center mt-10">
        ❓ Question: Compare SQL and NoSQL databases?
      </h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>SQL</th>
            <th>NoSQL</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Stands for Structured Query Language</td>
            <td>Stands for Not Only SQL</td>
          </tr>
          <tr>
            <td>Relational database management system (RDBMS)</td>
            <td>Non-relational database management system</td>
          </tr>
          <tr>
            <td>Suitable for structured data with predefined schema</td>
            <td>Suitable for unstructured and semi-structured data</td>
          </tr>
          <tr>
            <td>Data is stored in tables with columns and rows</td>
            <td>Data is stored in collections or documents</td>
          </tr>
          <tr>
            <td>Supports JOIN and complex queries</td>
            <td>Does not support JOIN and complex queries</td>
          </tr>
          <tr>
            <td>Uses normalized data structure</td>
            <td>Uses denormalized data structure</td>
          </tr>
          <tr>
            <td>Requires vertical scaling to handle large volumes of data</td>
            <td>
              Horizontal scaling is possible to handle large volumes of data
            </td>
          </tr>
          <tr>
            <td>
              Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL
              Server
            </td>
            <td>
              Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="link-a text-center mt-10">
        ❓ Question: What is express js? What is Nest JS?
      </h2>
      <div>
        <p>
          ✍️<span className="link-a">Express js:</span> <br />
          Express is a node js web application framework that provides broad
          features for building web and mobile applications. It is used to build
          a single page, multipage, and hybrid web application. It's a layer
          built on the top of the Node js that helps manage servers and routes.
          It provides a set of features and utilities to build web applications
          and APIs easily. Express.js simplifies the process of handling HTTP
          requests, routing, middleware, and serving static files.
        </p>
        <p>
        ✍️<span className="link-a">Nest JS:</span> <br />
        NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is designed to enhance the development experience by leveraging TypeScript, object-oriented programming principles, and the modular architecture of modern frameworks. <br />
        Nest. JS helps build lightweight, well-structured, and amazing microservices and helps evolve the technology stack. The microservice architecture enables the rapid, frequent, and reliable delivery of large, complex applications. Out-of-the-box tools and features make development, extension, and maintenance efficient.
        </p>
      </div>

      <h2 className="link-a text-center mt-10">
        ❓ Question: What is MongoDB aggregate and how does it work?
      </h2>
      <div>
        <p>✍️<span className="link-a"> MongoDB aggregate :</span> <br />
        In MongoDB, Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.The aggregate method is used to perform advanced data processing and aggregation operations on collections. It allows you to analyze, transform, and summarize data using a pipeline of stages. <br />
        ✍️<span className="link-a">how it works :</span> <br />
        The aggregate method takes an array of pipeline stages as its argument. Each stage represents a specific operation or transformation to be applied to the data. The output of one stage serves as the input for the next stage, forming a sequence of data processing steps. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

        </p>
      </div>
    </div>
  );
};

export default Blog;
