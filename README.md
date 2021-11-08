<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<div align="center">
<h3 align="center">Dependagraph</h3>

  <p align="center">
    <b>Dependagraph</b> is a little tool to help you visualize your <b>JavaScript/TypeScript project's dependencies</b> using a network graph. Showing you what needs what and what is probably useless in a fun and graphical way.
    <br />
    <br />
    <a href="https://github.com/Emeto/dependagraph/issues">Report Bug</a>
    ·
    <a href="https://github.com/Emeto/dependagraph/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

At this time, Dependagraph only supports projects using **npm**, support for projects using others packages managers is coming soon. Please see the [roadmap](#roadmap) for more information.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Node.js **v14.17.5** or later

### Installation

Install the package globally using npm
   ```sh
   npm install dependagraph@latest -g
   ```
**OR**

Install it locally to access the API for use in your own project
   ```sh
   npm install dependagraph@latest --save
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Put yourself at the root of your project's directory
   ```sh
   cd /your/project/dir
    ```
2. Launch dependagraph
    ```shell
    dependagraph
    ```
   
At this point, **Dependagraph** will parse your `package-lock.json` file to generates nodes and edges to be used by the `vis.js` library. Once this is done, a new HTML document should pop inside a `dependagraph` directory at the root of your project.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- Full support for **yarn**
- Writing an actual UI
  - Using `Vue.js` and `TailwindCSS`
  - Getting more information on a clicked dependency on the graph
  - Checking for more recent dependencies versions
  - Color-coded graph nodes
  - Real-time filtering
- Supporting other languages

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Jérémy Castellano](https://github.com/Emeto)
* [Vis.js community](https://github.com/visjs)
* [All contributors](https://github.com/Emeto/dependagraph/contributors)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Emeto/dependagraph.svg?style=for-the-badge
[contributors-url]: https://github.com/Emeto/dependagraph/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Emeto/dependagraph.svg?style=for-the-badge
[forks-url]: https://github.com/Emeto/dependagraph/network/members
[stars-shield]: https://img.shields.io/github/stars/Emeto/dependagraph.svg?style=for-the-badge
[stars-url]: https://github.com/Emeto/dependagraph/stargazers
[issues-shield]: https://img.shields.io/github/issues/Emeto/dependagraph.svg?style=for-the-badge
[issues-url]: https://github.com/Emeto/dependagraph/issues
[license-shield]: https://img.shields.io/github/license/Emeto/dependagraph.svg?style=for-the-badge
[license-url]: https://github.com/Emeto/dependagraph/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeremycastellano
[product-screenshot]: images/screenshot.png
