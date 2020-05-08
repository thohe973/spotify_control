import { toast } from 'react-toastify';

export const handleError = (resp: Response): void => {
  resp.text().then(text => {
    if (text && !resp.ok) {
      const json = JSON.parse(text);
      const message = json ? JSON.parse(json.body)?.error?.message : undefined;
      toast.error(message);
    }
  });
}
