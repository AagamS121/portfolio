import { Component, type ErrorInfo, type ReactNode } from 'react'

export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error(error, info)
  }
  render() {
    if (this.state.failed)
      return (
        this.props.fallback ?? (
          <main className="error-state">
            <h1>Something went wrong.</h1>
            <p>Please reload the page to try again.</p>
            <a className="button button-primary" href="/">
              Back to home
            </a>
          </main>
        )
      )
    return this.props.children
  }
}
