import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
export function Contact() {
  return (
    <div className="min-h-screen bg-warm-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-green mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600">
            Une question ? Besoin d'informations ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-dark-green mb-6">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nom" placeholder="Votre nom" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="votre@email.com" />

              </div>
              <div>
                <label className="block text-sm font-bold text-dark-green mb-1 ml-1">
                  Sujet
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-sage bg-white focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all duration-200">
                  <option>Renseignements généraux</option>
                  <option>Inscriptions</option>
                  <option>Recrutement</option>
                  <option>Autre</option>
                </select>
              </div>
              <Textarea
                label="Message"
                placeholder="Comment pouvons-nous vous aider ?" />

              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </Card>

          {/* Info & Map */}
          <div className="space-y-8">
            <Card className="p-8 bg-forest-green text-white">
              <h2 className="text-2xl font-bold mb-6">Informations</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-sunny-yellow mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Adresse</p>
                    <p className="text-sage">Quartier Souissi, Rabat, Maroc</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-sunny-yellow mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Téléphone</p>
                    <p className="text-sage">+212 5 37 XX XX XX</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-sunny-yellow mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sage">contact@olmsouissi.ma</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-sunny-yellow mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Horaires d'ouverture</p>
                    <p className="text-sage">Lundi - Vendredi: 08:00 - 16:30</p>
                    <p className="text-sage">Mercredi: 08:00 - 12:30</p>
                  </div>
                </li>
              </ul>
            </Card>

            {/* Map Placeholder */}
            <div className="h-64 bg-sage rounded-2xl overflow-hidden relative flex items-center justify-center border-2 border-white shadow-md">
              <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/data=lyrs=m@189&hl=en&x=0&y=0&z=15')] opacity-50 bg-cover bg-center mix-blend-multiply" />
              <div className="z-10 bg-white px-4 py-2 rounded-full shadow-lg flex items-center text-forest-green font-bold animate-bounce">
                <MapPin className="mr-2" size={20} />
                Rabat, Souissi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}