import { Html, Button, Text } from '@react-email/components';

interface EmailerProps {
    email?: string;
  }

export default function subscriberEmailer(EmailerProps: any) {
  return (
    <Html>
      <Text>Email: {EmailerProps.email},</Text>
      <Button
        href="https://starwebmakerai.vercel.app"
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Star Web Maker AI
      </Button>
    </Html>
  );
}