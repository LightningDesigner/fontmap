console.log('ui.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');

    const addMappingButton = document.getElementById('add-mapping');
    const applyMappingsButton = document.getElementById('apply-mappings');

    if (addMappingButton) {
        addMappingButton.addEventListener('click', () => {
            console.log('Add Mapping clicked');
            parent.postMessage({ pluginMessage: { type: 'create-mapping' } } , '*');
        });
    } else {
        console.error('Add Mapping button not found');
    }

    if (applyMappingsButton) {
        applyMappingsButton.addEventListener('click', () => {
            console.log('Apply Mappings clicked');
            parent.postMessage({ pluginMessage: { type: 'apply-mapping' } } , '*');
        });
    } else {
        console.error('Apply Mappings button not found');
    }

    document.getElementById('create').onclick = () => {
        // Remove the count input logic
        parent.postMessage({ pluginMessage: { type: 'create-shapes' } } , '*');
    }

    // Keep the cancel button functionality if you want to close the plugin
    document.getElementById('cancel').onclick = () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } } , '*');
    }
});

// Listen for messages from the plugin code
window.onmessage = (event) => {
    console.log('Message received in UI:', event.data.pluginMessage);
};