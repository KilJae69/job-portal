"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

// Zod Schema for validation
const jobSearchSchema = z.object({
  keywords: z.string().min(1, 'Please enter job title or keywords'),
  location: z.string().optional(),
  category: z.string().optional(),
  type: z.string().optional(),
  experience: z.array(z.string()).optional(),
  careerLevel: z.array(z.string()).optional(),
  qualification: z.array(z.string()).optional(),
});

export default function TJobSearchForm() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const form = useForm({
    resolver: zodResolver(jobSearchSchema),
    defaultValues: {
      keywords: '',
      location: '',
      category: '',
      type: '',
      experience: [],
      careerLevel: [],
      qualification: []
    },
  });

  const onSubmit = (data) => {
    console.log('Search Data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          <FormField name="keywords" control={form.control} render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Job title, keywords..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField name="location" control={form.control} render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="City or postcode" {...field} />
              </FormControl>
            </FormItem>
          )} />

          <FormField name="category" control={form.control} render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select {...field}>
                  <option value="">All Categories</option>
                  <option value="tech">Tech</option>
                  <option value="health">Health</option>
                  <option value="finance">Finance</option>
                </Select>
              </FormControl>
            </FormItem>
          )} />

          <Button type="button" onClick={() => setShowAdvanced(!showAdvanced)}>
            Advanced
          </Button>

          <Button type="submit">Find Jobs</Button>
        </div>

        {showAdvanced && (
          <div className="bg-gray-100 p-4 rounded-md shadow-sm">
            <div className="grid grid-cols-4 gap-4">

              <FormField name="type" control={form.control} render={({ field }) => (
                <FormItem>
                  <Select {...field}>
                    <option value="">Type</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="freelance">Freelance</option>
                  </Select>
                </FormItem>
              )} />

              {/* Correct Usage of shadcn Checkbox */}
              <div>
                <p className="font-medium mb-2">Experience</p>
                {['Fresh', '1 Year', '2 Year', '3 Year', '4 Year'].map((exp) => (
                  <FormField
                    key={exp}
                    name="experience"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(exp)}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([...field.value, exp])
                                : field.onChange(field.value.filter((v) => v !== exp))
                            }
                          />
                        </FormControl>
                        {exp}
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div>
                <p className="font-medium mb-2">Career Level</p>
                {['Manager', 'Officer', 'Student', 'Executive', 'Others'].map((level) => (
                  <FormField
                    key={level}
                    name="careerLevel"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(level)}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([...field.value, level])
                                : field.onChange(field.value.filter((v) => v !== level))
                            }
                          />
                        </FormControl>
                        {level}
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div>
                <p className="font-medium mb-2">Qualification</p>
                {[
                  'Certificate',
                  'Associate Degree',
                  'Bachelor Degree',
                  'Master’s Degree',
                  'Doctorate Degree',
                ].map((qual) => (
                  <FormField
                    key={qual}
                    name="qualification"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(qual)}
                            onCheckedChange={(checked) =>
                              checked
                                ? field.onChange([...field.value, qual])
                                : field.onChange(field.value.filter((v) => v !== qual))
                            }
                          />
                        </FormControl>
                        {qual}
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
}
