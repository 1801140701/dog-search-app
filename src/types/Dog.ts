export interface Dog {
    id: number; // Add the 'id' property
    reference_image_id?: string;
    name: string;
    breed_group?: string;
    height: { metric: string };
    weight: { metric: string };
    life_span?: string;
    bred_for?: string;
}
