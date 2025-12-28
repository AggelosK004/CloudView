import React from 'react';
import { useAppLogic } from './hooks/useAppLogic';
import AppShell from './components/AppShell';
import MainLayout from './components/MainLayout';

export default function App() {
  const { state, actions } = useAppLogic();

  return (
    <AppShell colors={state.bgColors}>
      <MainLayout state={state} actions={actions} />
    </AppShell>);

}