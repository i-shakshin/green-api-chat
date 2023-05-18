/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#eae6df',
        'app-bg-highlight': '#00a884',
        'input-text-color': '#3b4a54',
        'login-page-input-bg': '#f0f2f5 !important',
        'primary-button-bg': '#008069',
        'main-page-bg': '#f0f2f5',
        'chat-bg': '#efeae2',
        'self-messages-bg': '#d9fdd3',
      },
      backgroundImage: {
        'chat-bg-image': "url('/chat-bg.png')",
      },
      width: {
        'main-page-wrapper': '90%',
        'chats-list': '410px',
        chat: 'calc(100% - 410px)',
      },
      height: {
        'bg-highlight-height': '120px',
        'main-page-wrapper': '90%',
        'chat-header': '62px',
      },
      maxWidth: {
        'chat-message': '45%',
      },
    },
  },
  plugins: [],
};
