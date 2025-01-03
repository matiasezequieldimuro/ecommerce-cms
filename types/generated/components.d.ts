import type { Schema, Struct } from '@strapi/strapi';

export interface PropertyAdditionalProperties extends Struct.ComponentSchema {
  collectionName: 'components_property_additional_properties';
  info: {
    displayName: 'additional_properties';
    icon: 'bulletList';
  };
  attributes: {
    data_type: Schema.Attribute.Enumeration<['String', 'Date', 'Number']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'String'>;
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'property.additional-properties': PropertyAdditionalProperties;
    }
  }
}
