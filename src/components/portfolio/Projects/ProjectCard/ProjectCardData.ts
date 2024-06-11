export default [
  {
    title: 'Lambda Subscriber Service',
    subtitle:
      'A serverless AWS Lambda based subscriber service which allows users to build their own subscriber base for a dev blog, mailing list, or newsletter.',
    body: "This serverless subscriber service uses AWS Lambda, AWS SES, AWS API Gateway, and AWS DyanmoDB to enable individuals to build their own independent subscriber base for a dev blog, mailing list, or newsletter. This service uses the double opt-in method to ensure that every sign up email address is for a valid, monitored inbox. \n \n Using AWS's generous always-free tier for AWS Lambda and DynamoDB, this service will be virtually always available, and have negligible cost for a low-traffic site like a personal blog.",
    image: '/lambda-subscribe-card-photo.png',
    githubLink: 'https://github.com/RyanBeGell/lambda-subscriber-service',
    demoLink: '',
    tags: ['NodeJS', 'AWS', 'JavaScript', 'MaterialUI', 'HTML5', 'CSS3', ],
    modalImages: [
      '/lambda-subscribe-service/subscribe.PNG',
      '/lambda-subscribe-service/confirm-email.PNG',
      '/lambda-subscribe-service/subscribed.PNG',
      '/lambda-subscribe-service/unsubscribe.PNG',
    ],
  },
  {
    title: 'Lambda Contact Form Service',
    subtitle:
      'Have full control over your contact form without the hassle of managing a dedicated server with this serverless contact form service.',
    body: "I built this serverless contact form service to avoid vendor lock-in from solutions like Netlify Forms, and not compromise on UI with something like an embedded Google Form. This service allows users to set up their own seamless UI that matches their site perfectly, and maintain full control over their contact form. \n \nThis serverless contact form service uses AWS Lambda and AWS SES to allow users to easily add a contact form to their website, without the need for a dedicated server. This solution is cost effective and virtually free for small applications like personal sites. ",
    image: '/serverless-contact-form-photo.png',
    githubLink:
      'https://github.com/RyanBeGell/lambda-contact-form-email-service',
    demoLink: '',
    tags: ['NodeJS', 'AWS', 'JavaScript', 'MaterialUI', 'HTML5', 'CSS3', ],
    modalImages: [
      '/contact-form-service/contact-form.PNG',
      '/contact-form-service/success-toast.PNG',
      '/contact-form-service/email.PNG',
    ],
  },
  {
    title: 'Go Pomodoro CLI ',
    subtitle:
      'A CLI Pomodoro Timer built in Go for Windows Subsystem for Linux (WSL) which includes Windows notifications to help you stay productive.',
    body: 'The Pomodoro technique is a time management method which uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short 5-minute breaks. The Pomodoro technique is based on the idea that frequent small breaks can improve mental agility and productivity. \n \n This CLI Pomodoro Timer built in Go for Windows Subsystem for Linux (WSL) which includes Windows notifications to help users stay productive. This program executes a short powershell script to send Windows toast notifications from your WSL terminal.',
    image: '/pomodoro-cli/pomodoro-break.PNG',
    githubLink: 'https://github.com/RyanBeGell/cli-pomodoro-timer',
    demoLink: '',
    tags: ['Go', 'PowerShell'],
    modalImages: [
      '/pomodoro-cli/pomodoro-break.PNG',
      '/pomodoro-cli/pomodoro-breaking.PNG',
      '/pomodoro-cli/pomodoro-back-to-work.PNG',
      '/pomodoro-cli/pomodoro-working.PNG',
    ],
  },
];
