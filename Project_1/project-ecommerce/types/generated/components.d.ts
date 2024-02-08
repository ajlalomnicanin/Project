import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomCustomField extends Schema.Component {
  collectionName: 'components_custom_custom_fields';
  info: {
    name: 'Custom_field';
    displayName: 'Custom field';
    icon: 'archway';
  };
  attributes: {
    title: Attribute.String;
    required: Attribute.Boolean;
    options: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.custom-field': CustomCustomField;
    }
  }
}
