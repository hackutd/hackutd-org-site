# HackUTD Organizer Site - DEPRECATED

> [!WARNING]
> This repository is deprecated and is no longer actively maintained.
>
> HackUTD's current website is maintained in the [hackutd/hackutd-co](https://github.com/hackutd/hackutd-co) repository.

## Design 

* [Figma](https://www.figma.com/file/CcHbcrvp31oWjqgAvNP3kR/HackUTD-Organizer-Site?node-id=0%3A1) (if you have access)


## Code 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Run Website Locally

Run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

[Storybook](https://storybook.js.org/) has been configured to help facilitate component development for this website. To run storybooks:

```bash
yarn storybook
```

### Technologies & Packages Used

* [Styled Components](https://styled-components.com/) for CSS.
* [Lottie](https://airbnb.design/lottie/) for dynamic SVG animation, namely the logo at the top of the Hero.

This site's philosophy is to use as little external packages as possible. Custom CSS is given priority over Tailwind, MaterialUI etc. Even with what little packages are used, we *still* get obscure deprecation warnings and browser complaints. If you'd like to contribute, please heavily consider before installing a new Node package.

## Contributions

1. **Make or pick an issue to work on.** If you'd like to contribute on a problem or feature you've thought of yourself, first [make an issue](https://github.com/acmutd/hackutd-org-site/issues), and wait until it receives approval from a site adminstrator. Otherwise, you're free to pick up an existing issue.

2. **Make a branch.** Create a git branch with a descriptive name to work on your specific code. 

3. **Work on the issue on your branch.** Try to modify only files relevant to your issue, and stay away from important folders like `/pages` if possible. Furthermore, try to adhere to the existing site structure. For example, place raster images in the relevant folder or base level in `assets/img`, and SVGs in `public/svg`. If you're working on a discrete component, a great way to preview your component is to make a storyboard to work in.

4. **Ensure there are no errors.** An easy way to do this is running `yarn build` and ensuring no errors prevent the app from building. 

5. **Make a pull request.** This way, site administrators can look at & test your code before merging it to the main branch to be included on the deployed site. 

And of course, contact the main site administrator [Nathaniel Brown](https://github.com/natesabrown) if you have any questions!

## Credits

Special thanks to:
* [Abdullah Hasani](https://github.com/abdullah50053) for providing technical advice and helping to host the website. 
* [Dylan Nguyen](https://www.linkedin.com/in/dylancnguyen) for providing design advice. 
