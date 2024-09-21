/// <reference types="@figma/plugin-typings" />

interface Mapping {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  style: string;
}

console.log('Plugin code started');

figma.showUI(__html__, { width: 300, height: 400 });

const mappings: Mapping[] = [];

figma.ui.onmessage = async (msg: { type: string }) => {
  console.log('Message received in plugin code:', msg);
  if (msg.type === 'create-mapping') {
    console.log('Creating mapping...');
    await createMapping();
  } else if (msg.type === 'apply-mapping') {
    console.log('Applying mapping...');
    await applyMapping();
  }
};

function applyMappings(mappings: Mapping[]) {
  console.log('Applying mappings (to be implemented)');
  figma.notify(`Applying ${mappings.length} mappings (not really implemented yet)`);
}

console.log('Plugin code finished loading');

async function createMapping() {
  // Implement your mapping creation logic here
  console.log('Create mapping function called');
  figma.notify('Mapping created');
}

async function applyMapping() {
  // Implement your mapping application logic here
  console.log('Apply mapping function called');
  figma.notify('Mapping applied');
}

