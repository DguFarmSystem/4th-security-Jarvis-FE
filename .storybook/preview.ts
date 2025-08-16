import type { Preview } from '@storybook/react-vite'
import "../src/styles/theme.css";
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { handlers } from "../src/mocks/handlers"

initialize({
  onUnhandledRequest: 'warn', // 디버깅 시 유용
});

export const decorators = [mswDecorator];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    msw: {
      handlers: [...handlers],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;