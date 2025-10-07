import React from 'react';

interface ToastState {
  id: number;
  message: string;
}

interface PolicyAgreementContextValue {
  hasAccepted: boolean;
  setHasAccepted: (accepted: boolean) => void;
  isPolicyOpen: boolean;
  openPolicy: () => void;
  closePolicy: () => void;
  requireAgreement: (message?: string) => boolean;
  showToast: (message: string) => void;
  toast: ToastState | null;
}

const PolicyAgreementContext = React.createContext<PolicyAgreementContextValue | null>(null);

export const PolicyAgreementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasAccepted, setHasAcceptedState] = React.useState(false);
  const [isPolicyOpen, setPolicyOpen] = React.useState(false);
  const [toast, setToast] = React.useState<ToastState | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem('sa_rules_accepted');
    if (stored === 'true') {
      setHasAcceptedState(true);
    }
  }, []);

  const showToast = React.useCallback((message: string) => {
    setToast({ id: Date.now(), message });
  }, []);

  React.useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToast(null);
    }, 3600);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  const setHasAccepted = React.useCallback((accepted: boolean) => {
    setHasAcceptedState(accepted);
    if (typeof window === 'undefined') {
      return;
    }

    if (accepted) {
      window.localStorage.setItem('sa_rules_accepted', 'true');
    } else {
      window.localStorage.removeItem('sa_rules_accepted');
    }
  }, []);

  const openPolicy = React.useCallback(() => setPolicyOpen(true), []);
  const closePolicy = React.useCallback(() => setPolicyOpen(false), []);

  const requireAgreement = React.useCallback(
    (message?: string) => {
      if (hasAccepted) {
        return true;
      }

      setPolicyOpen(true);
      if (message) {
        showToast(message);
      }

      return false;
    },
    [hasAccepted, showToast],
  );

  const contextValue = React.useMemo(
    () => ({
      hasAccepted,
      setHasAccepted,
      isPolicyOpen,
      openPolicy,
      closePolicy,
      requireAgreement,
      showToast,
      toast,
    }),
    [hasAccepted, setHasAccepted, isPolicyOpen, openPolicy, closePolicy, requireAgreement, showToast, toast],
  );

  return <PolicyAgreementContext.Provider value={contextValue}>{children}</PolicyAgreementContext.Provider>;
};

export const usePolicyAgreement = (): PolicyAgreementContextValue => {
  const context = React.useContext(PolicyAgreementContext);
  if (!context) {
    throw new Error('usePolicyAgreement must be used within a PolicyAgreementProvider');
  }

  return context;
};
