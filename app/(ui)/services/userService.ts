
const credentials = btoa("dean:dean"); 

export async function registerUser(userData: {
    name: string;
    surname: string;
    email: string;
    phoneNumber?: string;
  }, roleId: number) {
    try {
      // Construct the payload
      const payload = {
        ...userData,
        //roleId,
        active: true, // Set active to true
      };

      console.log("Payload being sent:", payload); // Debugging: Log the payload

      const response = await fetch(`/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${credentials}`, // Add Basic Auth header
        },
        body: JSON.stringify(payload), // Ensure payload is stringified
      });

      if (!response.ok) {
        throw new Error(`Failed to register user: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }