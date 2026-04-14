<template>
  <div>
    <UPageHero
      title="Adopt a Cat"
      description="Find cats available for rehoming and give them a loving home. Browse our selection of adorable cats waiting for adoption."
      :links="[{
        label: 'Find your cat',
        to: '/listings',
        trailingIcon: 'i-lucide-chevron-right',
        size: 'xl'
      }]"
    />

    <UPageSection
      id="features"
      title="Meet the cats and kittens currently waiting to be adopted."
      description="Some of our cats need a specific home. Please read their profile to find out if they're right for you (and you're right for them). Not sure which cat is right for you?"
      :features="[{
        icon: 'i-lucide-search',
        title: '1. Find your cat',
        description: 'Browse our selection of adorable cats waiting for adoption. Use filters to find the perfect match based on age, breed, and personality.'
      }, {
        icon: 'i-lucide-mail',
        title: '2. Enquire about adoption',
        description: `It's easy to enquire about adopting a cat. Just click the 'Enquire about adoption' button on the cat's profile and fill out the form. Our team will get back to you within 24-48 hours.`
      }, {
        icon: 'i-lucide-heart',
        title: '3. Meet your new friend',
        description: 'Once your enquiry is approved, you can arrange a meet-and-greet with the cat. This is a great opportunity to see if you and the cat are a good match before finalizing the adoption.'
      }]"
    />
  </div>
</template>
