import ReactGA from 'react-ga'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID!)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  })
}
