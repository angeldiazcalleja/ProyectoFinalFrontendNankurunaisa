import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post("https://candid-panda-8dc96c.netlify.app/auth/login", data);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post("https://candid-panda-8dc96c.netlify.app/users", data);
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const getAllUsers = async (token, page) => {
  try {
    const response = await axios.get("https://candid-panda-8dc96c.netlify.app/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const userProfile = async (token, endpoint) => {
  try {
    const response = await axios.get(
      `https://candid-panda-8dc96c.netlify.app/users/${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfil:", error);
    throw error;
  }
};

export const updateUserProfile = async (token, userId, data) => {
  try {
    const response = await axios.put(`https://candid-panda-8dc96c.netlify.app/users/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

export const createAppointment = async (newAppointment, token) => {
  const result = await axios.post(
    "https://candid-panda-8dc96c.netlify.app/appointments",
    newAppointment,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

export const getAppointments = async (token, page) => {
  const result = await axios.get("https://candid-panda-8dc96c.netlify.app/appointments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
    },
  });
  return result.data;
};

export const modifyAppointment = async (token, appointmentId, formData) => {
  const result = await axios.put(
    "https://candid-panda-8dc96c.netlify.app/appointments/" + appointmentId,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result;
};

export const deleteAppointment = async (token, appointmentId) => {
  const result = await axios.delete(
    "https://candid-panda-8dc96c.netlify.app/appointments/" + appointmentId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
}

export const restoreDeletedAppointment = async (token, appointmentId, formData) => {
    const result = await axios.put(
      "https://candid-panda-8dc96c.netlify.app/appointments/restore/" +appointmentId, formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
    return result.data
};


export const createBooking = async (newBooking, token) => {
  const result = await axios.post(
    "https://candid-panda-8dc96c.netlify.app/bookings",
    newBooking,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};


export const getBookings = async (token, page) => {
  const result = await axios.get("https://candid-panda-8dc96c.netlify.app/bookings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
    },
  });
  return result.data;
};

export const deleteBooking = async (bookingId, token) => {
  const result = await axios.delete(
    "https://candid-panda-8dc96c.netlify.app/bookings/" + bookingId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};





