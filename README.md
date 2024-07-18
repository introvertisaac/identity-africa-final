# Identity Africa Landing Page

## Overview

Welcome to the repository for the Identity Africa landing page. This project is built using Next.js and integrates various tools and libraries to provide a dynamic and user-friendly interface.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Lottie Animations**: For engaging and interactive animations.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Material Icons**: For a wide range of icons.
- **React Icons**: For additional icon options.
- **Shadcn-ui**: For forms and customizations to ensure a consistent and modern look.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/identity-africa-landing-page.git
   cd identity-africa-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Project Structure

```
/components        # Reusable React components
/pages             # Next.js pages
/public            # Static assets (images, icons, etc.)
/styles            # CSS and Tailwind CSS files
```

## Customization

### Lottie Animations

Lottie animations can be added or customized by placing the animation JSON files in the `public/animations` directory and using them in your components.

### Tailwind CSS

Tailwind CSS configuration can be found in the `tailwind.config.js` file. You can customize the theme, colors, and other utilities as needed.

### Icons

Material Icons and React Icons can be imported and used in components as follows:

```jsx
import { IconName } from 'react-icons/ri';  // React Icons
import Icon from '@material-ui/core/Icon';  // Material Icons

// Usage in a component
<Icon>home</Icon>  // Material Icons
<IconName />       // React Icons
```

### Shadcn-ui Forms

Forms and custom UI components are built using Shadcn-ui. Refer to the [Shadcn-ui documentation](https://shadcn-ui.com/docs) for customization options.

## Deployment

To deploy the project, you can use platforms like Vercel, which provides seamless integration with Next.js. Follow these steps:

1. Push your code to a GitHub repository.
2. Sign up on [Vercel](https://vercel.com) and link your GitHub account.
3. Import your project and deploy.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's style guidelines and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

For any questions or support, please contact [support@identityafrica.com](mailto:support@identityafrica.com).

Happy coding! 🚀