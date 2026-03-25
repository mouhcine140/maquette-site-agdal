import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, Users, CheckCircle, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Card } from '../components/ui/Card';
export function Inscriptions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        'Merci ! Votre demande a été envoyée. Nous vous contacterons bientôt.'
      );
    }, 1500);
  };
  const steps = [
  {
    icon: FileText,
    title: 'Formulaire',
    desc: 'Remplissez le dossier en ligne'
  },
  {
    icon: Upload,
    title: 'Documents',
    desc: 'Envoyez les pièces justificatives'
  },
  {
    icon: Users,
    title: 'Entretien',
    desc: 'Rencontre avec la direction'
  },
  {
    icon: CheckCircle,
    title: 'Inscription',
    desc: 'Confirmation et rentrée'
  }];

  return (
    <div className="min-h-screen bg-warm-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
            Inscriptions
          </h1>
          <p className="text-xl text-gray-600">
            Rejoignez la famille OLM Souissi en quelques étapes simples.
          </p>
        </div>

        {/* Steps Visualization */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-1 bg-sage z-0" />

            {steps.map((step, index) =>
            <motion.div
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.15
              }}>

                <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md ${index === 0 ? 'bg-forest-green text-white' : 'bg-white text-sage border-2 border-sage'}`}>

                  <step.icon size={28} />
                </div>
                <h3 className="font-bold text-dark-green mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-dark-green mb-8 flex items-center">
              <span className="bg-sunny-yellow w-2 h-8 mr-3 rounded-full" />
              Formulaire de pré-inscription
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nom de l'enfant" placeholder="Nom" required />
                <Input
                  label="Prénom de l'enfant"
                  placeholder="Prénom"
                  required />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Date de naissance" type="date" required />
                <div>
                  <label className="block text-sm font-bold text-dark-green mb-1 ml-1">
                    Cycle souhaité
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-sage bg-white focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all duration-200">
                    <option>Maternelle (Petite Section)</option>
                    <option>Maternelle (Moyenne Section)</option>
                    <option>Maternelle (Grande Section)</option>
                    <option>Primaire (CP - CM2)</option>
                    <option>Collège</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-sage/30 my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nom du parent"
                  placeholder="Nom complet"
                  required />

                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="+212 6..."
                  required />

              </div>

              <Input
                label="Email"
                type="email"
                placeholder="exemple@email.com"
                required />


              <Textarea
                label="Message (Optionnel)"
                placeholder="Questions particulières ou remarques..." />


              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-sunny-yellow text-dark-green hover:bg-yellow-400"
                  isLoading={isSubmitting}>

                  <Send size={18} className="mr-2" />
                  Envoyer la demande
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  En soumettant ce formulaire, vous acceptez d'être contacté par
                  l'administration de l'école.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>);

}