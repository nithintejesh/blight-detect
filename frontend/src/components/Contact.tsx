import React from 'react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';
import Card from './ui/Card';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'support@potatoleaf.ai',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9AM to 5PM EST'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Agriculture Tech Park',
      description: '123 Innovation Drive, Tech Valley, CA 94025'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
                {React.createElement(info.icon, {
                  className: "w-6 h-6 text-green-600"
                })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-green-600 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Send us a Message
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            Have questions about our technology? Need help with disease detection?
            Our team is here to help!
          </p>
          <p className="text-sm text-gray-500">
            Expected response time: Within 24 hours
          </p>
        </div>
      </Card>
    </div>
  );
}