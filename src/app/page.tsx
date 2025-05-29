"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Check,
  Rocket,
  ArrowRight,
  Award,
  Star,
  BadgePercent,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";
import { USerSchema, USerSchemaData } from "@/hooks/use-user/schema";
import { useUser } from "@/hooks/use-user/use-user";

const BookDemo = () => {
  const route = useRouter();
  const { createUserIsLoading, handleCreateUser } = useUser();
  const isMobile = useIsMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const form = useForm<USerSchemaData>({
    resolver: zodResolver(USerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      clinicName: "",
    },
  });

  // ROI Calculator for mobile - calcular valores baseados no slider
  const calculateROI = (sliderValue: number) => {
    // Baseado no valor do slider (0-100), mapear para os três perfis
    if (sliderValue <= 33) {
      // Perfil Básico
      return {
        title: "Perfil Básico",
        description: "Clínicas com faturamento até R$ 30 mil/mês",
        orcamentos: 30,
        taxaAtual: 20,
        taxaNova: 35,
        ticket: 1800,
        aumento: 8100,
      };
    } else if (sliderValue <= 66) {
      // Perfil Crescimento
      return {
        title: "Perfil Crescimento",
        description: "Clínicas com faturamento entre R$ 30 e R$ 80 mil/mês",
        orcamentos: 60,
        taxaAtual: 25,
        taxaNova: 40,
        ticket: 2600,
        aumento: 23400,
      };
    } else {
      // Perfil Premium
      return {
        title: "Perfil Premium",
        description: "Clínicas com faturamento acima de R$ 80 mil/mês",
        orcamentos: 120,
        taxaAtual: 30,
        taxaNova: 45,
        ticket: 3800,
        aumento: 68400,
      };
    }
  };
  const roiData = calculateROI(sliderValue);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Moved logo to top left above "Solução Preferida pelos Dentistas" */}
      <section
        id="top"
        className="bg-gradient-to-b from-primary to-primary/90 text-white py-12 md:py-20 px-4 md:px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="md:w-1/2">
              <div className="mb-4">
                <a
                  onClick={() =>
                    route.push(process.env.NEXT_PUBLIC_DAHSBOARD_URL)
                  }
                  className="inline-block text-white font-bold text-2xl md:text-3xl"
                >
                  Clinitt.ai
                </a>
              </div>

              <div className="inline-block bg-secondary/20 text-white px-4 py-1 rounded-full mb-4 animate-fadeInUp">
                <span className="flex items-center gap-1 text-sm">
                  <Star className="h-3 w-3 md:h-4 md:w-4" /> Solução Preferida
                  pelos Dentistas
                </span>
              </div>
              <h1
                className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight animate-fadeInUp"
                style={{
                  animationDelay: "0.1s",
                }}
              >
                Transforme <span className="text-secondary">orçamentos</span> em{" "}
                <span className="text-secondary">tratamentos aprovados</span>
              </h1>

              <div
                className="space-y-3 md:space-y-4 mb-6 md:mb-8 animate-fadeInUp"
                style={{
                  animationDelay: "0.3s",
                }}
              >
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="text-white h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <span className="text-sm md:text-base">
                    Orçamentos visuais com <strong>3x mais conversões</strong>{" "}
                    que os tradicionais
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="text-white h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <span className="text-sm md:text-base">
                    Aumento médio de <strong>35% no valor</strong> dos
                    tratamentos aprovados
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="text-white h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <span className="text-sm md:text-base">
                    ROI comprovado: <strong>mais de R$15.000,00/mês</strong> em
                    novas receitas
                  </span>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 mb-6 animate-fadeInUp"
                style={{
                  animationDelay: "0.4s",
                }}
              >
                <div className="flex -space-x-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xs md:text-sm border-2 border-primary">
                    JR
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xs md:text-sm border-2 border-primary">
                    AC
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xs md:text-sm border-2 border-primary">
                    MP
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xs md:text-sm border-2 border-primary">
                    +
                  </div>
                </div>
                <div className="text-xs md:text-sm text-white/90">
                  Mais de 1.230 dentistas aprovam nossa solução
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 bg-white rounded-lg p-5 md:p-8 shadow-2xl border border-white/20 animate-fadeInUp"
              style={{
                animationDelay: "0.2s",
              }}
            >
              {/* Updated form header - calendar icon moved next to "demonstração" */}
              <div className="flex flex-col items-center md:items-start mb-4 px-0">
                <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-1 flex items-center py-0 my-0 px-0 mx-0 md:text-center">
                  Agende sua demonstração
                </h2>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) =>
                    handleCreateUser({ data, form: form })
                  )}
                  className="space-y-3 md:space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm md:text-base">
                          Seu nome
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite seu nome completo"
                            {...field}
                            className="text-sm md:text-base text-gray-900"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-sm md:text-base">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="seuemail@clinica.com"
                              {...field}
                              className="text-sm md:text-base text-gray-900"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-sm md:text-base">
                            Telefone (Seu Whatsapp)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(11) 98765-4321"
                              {...field}
                              className="text-sm md:text-base text-gray-900"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="clinicName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm md:text-base">
                          Nome da clínica
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite o nome da sua clínica"
                            {...field}
                            className="text-sm md:text-base text-gray-900"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="period"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 text-sm md:text-base">
                          Melhor período para contato
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="text-accent-foreground">
                            <SelectTrigger className="text-sm md:text-base">
                              <SelectValue placeholder="Selecione o período" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Manhã">
                              Manhã (8h às 12h)
                            </SelectItem>
                            <SelectItem value="Tarde">
                              Tarde (13h às 18h)
                            </SelectItem>
                            <SelectItem value="Noite">
                              Noite (após 18h)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full py-4 md:py-6 text-sm md:text-lg"
                    disabled={createUserIsLoading}
                  >
                    {createUserIsLoading
                      ? "Enviando..."
                      : "Agendar demonstração"}
                    <ChevronRight className="ml-1 h-4 w-4 md:h-5 md:w-5" />
                  </Button>

                  <p className="text-[10px] md:text-xs text-center text-gray-500">
                    Ao agendar, você concorda com nossa política de privacidade.
                    Não compartilhamos seus dados com terceiros.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - UPDATED */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-primary">
              Tecnologia inovadora
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Uma solução única no mercado desenvolvida especificamente para
              aumentar aprovações de tratamentos e impulsionar resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-primary/5 p-4 md:p-6 rounded-lg shadow hover:shadow-md transition-all">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Check className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary text-base md:text-lg mb-1 md:mb-2">
                Solução única
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                Não existe nada parecido com a Clinitt.ai no mercado atual, em
                nenhum lugar do mundo
              </p>
            </div>

            <div className="bg-primary/5 p-4 md:p-6 rounded-lg shadow hover:shadow-md transition-all">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary text-base md:text-lg mb-1 md:mb-2">
                Tecnologia exclusiva
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                Desenvolvida após anos de pesquisa em psicologia de consumo e
                comportamento de pacientes
              </p>
            </div>

            <div className="bg-primary/5 p-4 md:p-6 rounded-lg shadow hover:shadow-md transition-all">
              <div className="h-12 w-12 md:h-14 md:w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary text-base md:text-lg mb-1 md:mb-2">
                Resultados comprovados
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                Aumento médio de 35% na taxa de aprovação de tratamentos já nos
                primeiros 30 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator (Mobile Slider Version) - Updated for dynamic value changes */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-primary">
              Calculadora de ROI: Veja o impacto real no seu faturamento
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos clientes relatam aumento médio de 35% nas aprovações de
              orçamentos. Confira o impacto que a Clinitt.ai pode ter nos seus
              resultados:
            </p>
          </div>

          {isMobile ? (
            <div className="bg-white rounded-lg shadow-lg p-5 mb-6">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold text-primary">
                  {roiData.title}
                </h3>
                <p className="text-sm text-gray-600">{roiData.description}</p>
              </div>

              <div className="mb-8 px-2">
                <label className="text-sm text-gray-600 mb-1 block">
                  Ajuste o perfil da sua clínica:
                </label>
                <Slider
                  value={[sliderValue]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setSliderValue(value[0])}
                  className="my-6"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Básico</span>
                  <span>Crescimento</span>
                  <span>Premium</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2 text-sm">
                  <span className="text-gray-600">Orçamentos mensais</span>
                  <span className="font-medium">{roiData.orcamentos}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2 text-sm">
                  <span className="text-gray-600">Taxa atual de aprovação</span>
                  <span className="font-medium">{roiData.taxaAtual}%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2 text-sm">
                  <span className="text-gray-600">Nova taxa de aprovação</span>
                  <span className="font-medium text-secondary">
                    {roiData.taxaNova}%
                  </span>
                </div>
                <div className="flex justify-between items-center border-b pb-2 text-sm">
                  <span className="text-gray-600">Ticket médio</span>
                  <span className="font-medium">
                    R$ {roiData.ticket.toLocaleString("pt-BR")}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 whitespace-nowrap">
                  <span className="font-bold text-gray-800">
                    Aumento mensal
                  </span>
                  <span className="font-bold text-lg text-primary">
                    + R$ {roiData.aumento.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button asChild>
                  <a href="#top">Agendar demonstração</a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle className="text-primary py-4">
                    Perfil Básico
                  </CardTitle>
                  <CardDescription>
                    Clínicas com faturamento até R$ 30 mil/mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Orçamentos mensais</span>
                      <span className="font-medium">30</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">
                        Taxa atual de aprovação
                      </span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">
                        Nova taxa de aprovação
                      </span>
                      <span className="font-medium text-secondary">35%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Ticket médio</span>
                      <span className="font-medium">R$ 1.800</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-gray-800">
                        Aumento mensal
                      </span>
                      <span className="font-bold text-lg text-primary">
                        + R$ 8.100
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <Button asChild variant="outline">
                    <a href="#top">Agendar demonstração</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-xl bg-gradient-to-b  from-white to-primary/5 scale-105 z-10">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <div className="absolute -top-4 right-0 left-0 mx-auto w-fit bg-secondary px-3 py-1 rounded-full text-xs font-medium text-white">
                    MAIS POPULAR
                  </div>
                  <CardTitle className="py-4">Perfil Crescimento</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Clínicas com faturamento entre R$ 30 e R$ 80 mil/mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Orçamentos mensais</span>
                      <span className="font-medium">60</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">
                        Taxa atual de aprovação
                      </span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">
                        Nova taxa de aprovação
                      </span>
                      <span className="font-medium text-secondary">40%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Ticket médio</span>
                      <span className="font-medium">R$ 2.600</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-gray-800">
                        Aumento mensal
                      </span>
                      <span className="font-bold text-lg text-primary">
                        + R$ 23.400
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t py-4 ">
                  <Button asChild>
                    <a href="#top">Agendar demonstração</a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle className="text-primary py-4">
                    Perfil Premium
                  </CardTitle>
                  <CardDescription>
                    Clínicas com faturamento acima de R$ 80 mil/mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Orçamentos mensais</span>
                      <span className="font-medium">120</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">
                        Taxa atual de aprovação
                      </span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">
                        Nova taxa de aprovação
                      </span>
                      <span className="font-medium text-secondary">45%</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-gray-600">Ticket médio</span>
                      <span className="font-medium">R$ 3.800</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-gray-800">
                        Aumento mensal
                      </span>
                      <span className="font-bold text-lg text-primary">
                        + R$ 68.400
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <Button asChild variant="outline">
                    <a href="#top">Agendar demonstração</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-primary">
              Por que a Clinitt.ai revoluciona sua clínica
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma foi desenvolvida especificamente para ajudar
              clínicas odontológicas a superar desafios comuns na apresentação e
              aprovação de orçamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white p-5 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-primary/10">
              <div className="bg-primary/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary text-center">
                Orçamentos impressionantes
              </h3>
              <p className="text-xs md:text-base text-gray-600 text-center">
                Crie orçamentos visualmente atrativos com imagens profissionais,
                detalhes claros e personalizados para cada paciente, aumentando
                as taxas de aprovação.
              </p>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-primary/10">
              <div className="bg-primary/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary text-center">
                Insights de negócio
              </h3>
              <p className="text-xs md:text-base text-gray-600 text-center">
                Analise o perfil dos seus pacientes, compare taxas de aprovação
                por tratamento e dentista, e identifique oportunidades para
                crescimento da clínica.
              </p>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-primary/10">
              <div className="bg-primary/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Rocket className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-primary text-center">
                Automação completa
              </h3>
              <p className="text-xs md:text-base text-gray-600 text-center">
                Economize tempo com modelos de tratamento pré-definidos,
                acompanhamento automático de status e exportação em PDF com a
                identidade visual da sua clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Images */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-primary">
            Histórias de sucesso dos nossos clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-3 md:mb-0 md:mr-4 mx-auto md:mx-0">
                  DR
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl text-primary">
                    Dra. Renata Alves
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    Clínica Odontológica Sorrisos - São Paulo
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic">
                "Com a Clinitt.ai, aumentamos nossa taxa de aprovação de
                orçamentos em 42%. Os pacientes entendem melhor os tratamentos
                propostos e se sentem mais seguros para investir. Um divisor de
                águas para nossa clínica."
              </p>
              <div className="mt-4 text-sm text-secondary font-medium">
                Resultado: +R$ 27.600 em faturamento mensal adicional
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-3 md:mb-0 md:mr-4 mx-auto md:mx-0">
                  MC
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl text-primary">
                    Dr. Marcos Cardoso
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    Centro de Ortodontia Avançada - Rio de Janeiro
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic">
                "A plataforma revolucionou nossa abordagem. Os orçamentos
                digitais são muito mais profissionais e claros, o que resultou
                em maior confiança dos pacientes e melhor entendimento dos
                tratamentos propostos."
              </p>
              <div className="mt-4 text-sm text-secondary font-medium">
                Resultado: Aumento de 38% no valor médio dos tratamentos aceitos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Positioned BEFORE FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Transforme sua clínica com a Clinitt.ai
          </h2>
          <p className="text-sm md:text-lg mb-8 md:mb-10 max-w-3xl mx-auto">
            Agende uma demonstração gratuita e descubra como podemos ajudar a
            aumentar suas taxas de aprovação, melhorar a experiência dos seus
            pacientes e impulsionar o faturamento da sua clínica.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="py-2 md:py-6 px-6 md:px-8 text-sm md:text-lg"
          >
            <a href="#top">
              Agendar demonstração
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section - Moved after "Agendar demonstração gratuita" */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-primary">
            Perguntas frequentes
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white shadow rounded-lg border border-gray-100"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline font-medium text-sm md:text-base">
                  Quanto tempo leva para implementar a Clinitt.ai na minha
                  clínica?
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 text-xs md:text-sm text-gray-700">
                  A implementação é rápida e simples, levando em média 24 a 48
                  horas. Nossa equipe fornece treinamento completo para você e
                  sua equipe, garantindo que todos possam aproveitar ao máximo
                  os recursos da plataforma desde o primeiro dia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white shadow rounded-lg border border-gray-100"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline font-medium text-sm md:text-base">
                  A plataforma se integra com meu software de gestão atual?
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 text-xs md:text-sm text-gray-700">
                  Sim! A Clinitt.ai foi desenvolvida para integrar com os
                  principais sistemas de gestão odontológica do mercado. Durante
                  a implementação, configuramos as integrações necessárias para
                  que você tenha uma experiência fluida e sem duplicação de
                  dados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white shadow rounded-lg border border-gray-100"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline font-medium text-sm md:text-base">
                  Preciso de algum equipamento especial para usar a plataforma?
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 text-xs md:text-sm text-gray-700">
                  Não é necessário nenhum equipamento especial. A Clinitt.ai é
                  uma solução baseada em nuvem que funciona em qualquer
                  dispositivo com acesso à internet - computadores, tablets ou
                  smartphones. Isso oferece flexibilidade para criar e
                  apresentar orçamentos em qualquer lugar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white shadow rounded-lg border border-gray-100"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline font-medium text-sm md:text-base">
                  Quanto custa a assinatura da Clinitt.ai?
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 text-xs md:text-sm text-gray-700">
                  Oferecemos planos flexíveis que se adaptam ao tamanho e
                  necessidades da sua clínica, com preços a partir de R$
                  197/mês. Durante a demonstração personalizada, apresentaremos
                  as opções disponíveis e ajudaremos a selecionar o plano ideal
                  para sua operação. Lembre-se: atualmente temos uma oferta
                  especial com 50% de desconto em qualquer plano.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white shadow rounded-lg border border-gray-100"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline font-medium text-sm md:text-base">
                  Existe um período de teste antes de assinar?
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 text-xs md:text-sm text-gray-700">
                  Sim! Oferecemos um período de teste de 14 dias com acesso a
                  todos os recursos da plataforma. Além disso, fornecemos
                  garantia de 30 dias - se não estiver completamente satisfeito,
                  devolvemos seu investimento. Nossa prioridade é seu sucesso e
                  satisfação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8 md:mt-12">
              <Button asChild size="lg"></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Support Section */}

      {/* Final CTA Section - REMOVED as we've already added a similar section above */}

      {/* Footer */}
      <footer className="bg-primary-foreground py-8 md:py-12 px-4 md:px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-500">
              © {new Date().getFullYear()} Clinitt.ai - Todos os direitos
              reservados
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Transformando a experiência de aprovação de orçamentos em clínicas
              odontológicas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default BookDemo;
