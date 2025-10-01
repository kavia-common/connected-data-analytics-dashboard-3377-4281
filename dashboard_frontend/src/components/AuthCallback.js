import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSessionFromUrl({ storeSession: true });
        if (error) {
          // eslint-disable-next-line no-console
          console.error('Auth callback error:', error);
          navigate('/auth/error');
          return;
        }
        if (data?.session) {
          navigate('/'); // redirect to root/dashboard
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Auth callback exception:', e);
        navigate('/auth/error');
      }
    };
    handleAuthCallback();
  }, [navigate]);

  return <div>Processing authentication...</div>;
}
