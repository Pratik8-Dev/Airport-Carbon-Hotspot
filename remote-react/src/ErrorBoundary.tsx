import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface Props { children: ReactNode; onError?: (error: Error) => void }
interface State { failed: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, _info: ErrorInfo): void {
    this.props.onError?.(error); // callers report only a coarse code, never the stack or payload
  }

  render(): ReactNode {
    if (this.state.failed) {
      return (
        <Alert severity="error" role="alert">
            <AlertTitle>This view could not be displayed.</AlertTitle>
            Please refresh the page. If the problem continues, contact the support team.
        </Alert>
      );
    }
    return this.props.children;
  }
}
