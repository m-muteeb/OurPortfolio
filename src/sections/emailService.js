// src/emailService.js
import emailjs from 'emailjs-com';

/**
 * Sends project submission details via EmailJS.
 * @param {Object} data - The project submission data.
 * @returns {Promise} - Resolves if email sent successfully.
 */
export const sendProjectEmail = async (data) => {
  const serviceID = 'service_dvvun14';
  const templateID = 'template_ykjkmhi';
  const userID = 'r8yOkBIfBiVy1szmx'; // Usually starts with "u_..."

  const templateParams = {
  to_email: data.team_lead_contact,
  team_lead_name: data.team_lead_name,
  team_lead_contact: data.team_lead_contact,
  project_category: data.project_category,
  problem_statement: data.problem_statement,
  project_idea: data.project_idea,
  tech_stack: data.tech_stack || 'Not specified',
  team_members:
    data.team_members.length > 0
      ? data.team_members.map((m) => `${m.name} (${m.contact})`).join(', ')
      : 'No collaborators',
};


  try {
    const result = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log('✅ Email sent:', result.text);
    return true;
  } catch (error) {
    console.error('❌ Email failed:', error);
    return false;
  }
};
