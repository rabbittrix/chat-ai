import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      fieldType,
      fieldLabel,
      documentType = "Bond Agreement",
    } = await request.json();
    console.log("Generating content for:", {
      fieldType,
      fieldLabel,
      documentType,
    });

    // Prepare the prompt based on field type and label
    let prompt = `Generate professional content for a ${fieldType} field labeled "${fieldLabel}" in a ${documentType}. `;

    // Customize prompt based on field type
    switch (fieldType) {
      case "text":
        prompt += "Keep it concise and clear, maximum 2 sentences.";
        break;
      case "longtext":
      case "terms":
      case "clause":
        if (documentType === "Bond Agreement") {
          prompt += `Create detailed and professional terms for the "${fieldLabel}" section of a Bond Agreement. Include:
          - Clear and specific legal language
          - Relevant terms and conditions
          - Any necessary definitions
          - Obligations and rights
          - Applicable regulations
          Format the response with proper paragraphs and use legal terminology.`;
        } else {
          prompt +=
            "Provide detailed and professional content with proper formatting.";
        }
        break;
      case "table":
        prompt += `Generate a professional table with 3 columns and 4 rows for a ${documentType}. 
        The table should include:
        - Column headers
        - Relevant data for each row
        - Proper formatting
        Return the table in HTML format with proper styling.`;
        break;
      case "email":
        prompt += `Generate a professional business email address based on the company name "${fieldLabel}".
        The email should follow standard business email format (e.g., name@company.com).`;
        break;
      case "signature":
        prompt += `Generate a simple signature for a ${documentType} document.
        The signature should be in a simple, professional format.`;
        break;
      case "image":
        prompt += `Generate a simple company logo description for a ${documentType} document.
        The logo should be professional and appropriate for a business document.`;
        break;
      case "currency":
        if (fieldLabel.toLowerCase().includes("amount")) {
          prompt +=
            "Generate a reasonable bond amount in USD (numeric only, e.g. 1000000).";
        } else {
          prompt += "Provide only the numeric amount (e.g. 1000000).";
        }
        break;
      case "percentage":
        if (
          fieldLabel.toLowerCase().includes("rate") ||
          fieldLabel.toLowerCase().includes("interest")
        ) {
          prompt +=
            "Generate a reasonable interest rate as a number without % symbol (e.g. 5.5).";
        } else {
          prompt +=
            "Provide only the percentage number without the % symbol (e.g. 5.5).";
        }
        break;
      case "account":
        prompt +=
          "Generate a valid account number in standard format (e.g., 1234-5678-9012-3456).";
        break;
      case "phone":
        prompt += "Generate a valid phone number in international format.";
        break;
      case "address":
        prompt +=
          "Generate a complete business address in JSON format with street, number, city, state, zipCode, and country.";
        break;
      case "date":
        prompt += "Generate a date in ISO format (YYYY-MM-DD).";
        break;
      default:
        prompt += "Provide appropriate content for this field.";
    }

    console.log("Sending prompt to Ollama:", prompt);

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral",
        prompt: prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ollama error:", errorText);
      throw new Error(`Ollama API error: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    let content = result.response.trim();

    // Format content based on field type
    switch (fieldType) {
      case "table":
        // Format table content
        content = `<table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 1</th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 2</th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 3</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data 1</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data 2</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data 3</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data 4</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data 5</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Data 6</td>
            </tr>
          </tbody>
        </table>`;
        break;
      case "email":
        // Format email content
        const companyName = fieldLabel.toLowerCase().replace(/\s+/g, "");
        content = `contact@${companyName}.com`;
        break;
      case "signature":
        // Format signature content
        content = "John Doe\nCEO";
        break;
      case "image":
        // Format image content
        content =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiM3QzNBREQiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuM2VtIj5Mb2dvPC90ZXh0Pjwvc3ZnPg==";
        break;
      case "longtext":
      case "terms":
      case "clause":
        // Format rich text content
        content = content
          .split("\n")
          .map((paragraph: string) => paragraph.trim())
          .filter((paragraph: string) => paragraph)
          .map((paragraph: string) => {
            if (/^\d+\.\s/.test(paragraph)) {
              return `<p style="margin-left: 2em; text-indent: -1.5em; padding-left: 1.5em;">${paragraph}</p>`;
            } else if (/^[•\-\*]\s/.test(paragraph)) {
              return `<p style="margin-left: 2em; text-indent: -1em; padding-left: 1em;">${paragraph}</p>`;
            } else {
              return `<p style="text-indent: 2em; margin: 1em 0; text-align: justify;">${paragraph}</p>`;
            }
          })
          .join("");
        break;
      case "address":
        try {
          JSON.parse(content);
        } catch {
          const parts = content.split(",").map((part: string) => part.trim());
          content = JSON.stringify({
            street: parts[0] || "",
            number: parts[1] || "",
            city: parts[2] || "",
            state: parts[3] || "",
            zipCode: parts[4] || "",
            country: parts[5] || "",
          });
        }
        break;
      case "currency":
        // Extract only numbers and decimal points
        content = content.replace(/[^0-9.]/g, "");
        // Ensure it's a valid number
        if (!content || isNaN(Number(content))) {
          content = "1000000";
        }
        break;
      case "percentage":
        // Extract only numbers and decimal points
        content = content.replace(/[^0-9.]/g, "");
        // Ensure it's a valid percentage
        if (!content || isNaN(Number(content))) {
          content = "5.5";
        }
        // Ensure it's within reasonable range (0-100)
        const num = Number(content);
        if (num > 100) content = "5.5";
        break;
      case "date":
        if (!content.match(/^\d{4}-\d{2}-\d{2}/)) {
          const date = new Date();
          content = date.toISOString().split("T")[0];
        }
        break;
    }

    console.log("Formatted content:", content);

    return NextResponse.json({
      content,
      metadata: {
        model: "mistral",
        fieldType,
        fieldLabel,
        documentType,
      },
    });
  } catch (error: any) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate content" },
      { status: 500 }
    );
  }
}
