import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '9i6b36c0',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skdsuHiIzypf6UVl4Tm7eQkscrOE1kehNkccFr2UjaMJclPyirLekjiRybp1ijJsh2odD4pOEeFVgPhKBqMdMwAw5NKiEqEGxEgKXxJVSwFHurkyowHVS67JMp60eav7J2tYN8hXaBiNZHb87xS87BqMWXmVoTd04FpapdFaEEOj55uhuWq2 ',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);