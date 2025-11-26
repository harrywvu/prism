import React from 'react';

export interface Student {
  id: string;
  name: string;
  major: string;
  balance: number;
  imageUrl: string;
}

export interface Transaction {
  id: string;
  type: 'PAYMENT' | 'ACCESS' | 'LIBRARY';
  location: string;
  amount?: number;
  timestamp: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
}

export interface FeatureItem {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}